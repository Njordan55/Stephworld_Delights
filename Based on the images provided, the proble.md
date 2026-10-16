Based on the images provided, the problem is an externally-managed-environment error.

Here is the breakdown of what happened:

In Image 1: You installed Python using Homebrew (brew install python). This installed python@3.15.
In Image 2: You tried to run python3 -m pip install -U aniworld to install a package globally.
The Error: Modern Python installations managed by package managers like Homebrew (following PEP 668) mark themselves as "externally managed." This prevents you from using pip to install packages globally, which could break your system or Homebrew installation.
How to fix it (as suggested in Image 2):

For libraries: Create a virtual environment:

python3 -m venv path/to/venv
source path/to/venv/bin/activate
python3 -m pip install aniworld


For applications: Use pipx:

brew install pipx
pipx install aniworld
If you must install globally (not recommended): You can add the --break-system-packages flag, but the warning advises against it as it risks breaking your Homebrew installation.