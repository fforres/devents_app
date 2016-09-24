set -e # Exit with nonzero exit code if anything fails
echo "STARTING"
SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
  echo "Skipping deploy; just doing a build."
  exit 0
fi

echo "COPYING REPO"
# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into out/
# Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deply)
echo $REPO
git clone $REPO out
cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

# Clean out existing contents
rm -rf out/**/* || exit 0


# Copy
echo "COPYING /BUILD folder into /OUT"
cp -r ./build/* ./out
echo "COPYING CNAME folder into /OUT"
cp ./server/deploy/CNAME ./out
echo "COPYING 404 folder into /OUT"
cp ./server/deploy/404.html ./out
echo "COPYING TOS_and_privacy_policy folder into /OUT"
cp ./server/deploy/TOS_and_privacy_policy.html ./out

ls out






# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
# if [ -z `git diff --exit-code` ]; then
#   echo "No changes to the output on this push; exiting."
#   exit 0
# fi
# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTION_LABEL="88147cfe1a8e"
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"

ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}


echo $ENCRYPTED_KEY_VAR
echo $ENCRYPTED_IV_VAR
echo $ENCRYPTED_KEY
echo $ENCRYPTED_IV

echo "OPENSSL"
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in github_pages_deploy.enc -out github_pages_deploy -d

echo "chmod 600"
chmod 600 github_pages_deploy
eval `ssh-agent -s`

echo "SSH-ADD"
ssh-add github_pages_deploy







# # Run our compile script
# doCompile
#
# Now let's go have some fun with the cloned repoç
echo "Entering /OUT"
cd out
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"


# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
echo "GIT ADD"
git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"
ls

# Now that we're all set up, we can push.
echo "GIT SUBTREE"
# git subtree push --prefix build origin gh-pages
git push $SSH_REPO $TARGET_BRANCH
