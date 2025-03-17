def get_file_content(path):
    rslt = None
    with open(path, "r")as f:
        rslt = f.read()
        f.close()

    return rslt

