# Contributing

Want to help? Thanks so much, there's something to do for everybody!

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Using the issue tracker

The [issue tracker](https://github.com/fforres/devents_app) is the preferred channel for [bug reports](#bugs), [features requests](#features) and [submitting pull requests](#pull-requests).

[]()

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

PS  **_A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs._**

[]()

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to _you_ to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

[]()

## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (indentation, accurate comments, etc.) and any other requirements (such as test coverage).

Since the `master` branch is what is shown in the web, we have a `development` branch that unstable changes get merged into first. Only when we consider that stable we merge it into the `master` branch and release the changes for real.

Adhering to the following process is the best way to get your work included in the project:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork, and configure the remotes:

  ```bash
  # Clone your fork of the repo into the current directory
  git clone https://github.com/<your-username>/devents_app.git
  # Navigate to the newly cloned directory
  cd devents_app
  # Assign the original repo to a remote called "upstream"
  git remote add upstream https://github.com/fforres/devents_app.git
  ```

2. If you cloned a while ago, get the latest changes from upstream:

  ```bash
  git checkout dev
  git pull upstream dev
  ```

3. Create a new topic branch (off the `dev` branch) to contain your feature, change, or fix:

  ```bash
  git checkout -b <topic-branch-name>
  ```

4. Commit your changes in logical chunks. It would rock that you adhere to these [git commit message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

5. Locally merge (or rebase) the upstream dev branch into your topic branch:

  ```bash
  git pull [--rebase] upstream dev
  ```

6. Push your topic branch up to your fork:

  ```bash
  git push origin <topic-branch-name>
  ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description.

**IMPORTANT**: By submitting a patch, you agree to allow the project owners to license your work under the terms of the [MIT License](https://github.com/fforres/devents_app/blob/master/LICENSE.md).
