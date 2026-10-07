#!/usr/bin/env python3
"""
make_text.py — regenerate GRAMMATICA-TEXT.txt from index.html

Requires Node.js on PATH. From this folder:
  python3 make_text.py
  # or: node make_text.js

Canonical source: index.html. Does not modify the app.
"""
import subprocess, sys
from pathlib import Path
here = Path(__file__).resolve().parent
js = here / "make_text.js"
if not js.is_file():
    sys.exit(f"Missing {js}")
raise SystemExit(subprocess.call(["node", str(js)] + sys.argv[1:], cwd=str(here)))
