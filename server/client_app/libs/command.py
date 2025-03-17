import subprocess
from ._paths import COMPILER

def run_command(cmd):
    # Execute the command
    process = subprocess.Popen(
        cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True, text=True)
    std_out, std_err = process.communicate()  # Capture output and error
    return process.returncode, std_out, std_err


def cmpl(code):
    with open("tmp", "w") as f:
        f.write(code)
        f.close()

    #_, out, __ = run_command("./../build/bin/lexer < tmp")
    _, out, __ = run_command(f"{COMPILER} < tmp")
    return _, out, __
