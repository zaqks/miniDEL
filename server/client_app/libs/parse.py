from .command import cmpl
from ._paths import *
from .file import *


def parse(code):
    _, out, __ = cmpl(code)

    rslt = {"logs":  out if out else "Hello World :)",
            #
            "errors": [],
            #
            "IDFs": [],
            "Keywords": [],
            "Entities": [],
            #
            "ST_CST": [],
            "ST_IDF": [],
            "ST_KW": [],
            "ST_SEP": [],
            }

    # parse the tables first
    tbls = zip(["ST_IDF", "ST_SEP", "ST_CST", "ST_KW"],
               [ST_IDF, ST_SEP, ST_CST, ST_KW])
    for __, _ in tbls:
        rslt[__] = parse_table(get_file_content(_))

    # parse the entites and the erros
    rslt.update(parse_ents_and_errs(get_file_content(ENTITIES)))
    #

    # parse the errs
    # rslt["errors"] = parse_errs(get_file_content(ENTITIES))

    # parse the quads
    rslt.update(parse_quads(get_file_content(QUADS)))

    return rslt


def parse_table(out):
    rslt = []

    out = out.replace("___________________________\n", "").replace(
        "name | code | type | value | size\n", "")

    for row in out.split("\n"):
        if row.__len__():
            or_case = False
            # row case
            if row[0] + row[1] == "||":
                or_case = True

            clmns = row.split("|")

            if or_case:
                clmns = clmns[2:]
                clmns[0] = "||"

            rslt.append(clmns)

    return rslt


def parse_ents_and_errs(out):
    CLASSES = {
        "l_error": "errors",
        "_error": "errors2",
        #
        "IDF": "IDFs",
        "Keyword": "Keywords",
        "Entity": "Entities",
    }

    rslt = {
        "errors": [],
        "errors2": [],
        "IDFs": [],
        "Keywords": [],
        "Entities": [],
    }

    lines = out.split("\n")
    for line in lines:
        if "@" in line:
            # try:
            ln, clmn, lngth = [int(_)for _ in line.split("@")[-1].split(":")]
            # except:
            #     ln, clmn = [int(_)for _ in line.split("@")[-1].split(":")]
            #     lngth = 1

            for _ in CLASSES.keys():
                if _ in line:
                    rslt[CLASSES[_]].append((ln, clmn, lngth))
                    break

    return rslt


def parse_quads(out):
    rslt = []

    out = out.split("\n")
    out = [_.replace("(", "").replace(")", "") for _ in out]    
    out = [_.split(", ") for _ in out]

    for _ in out:
        _ = _[0].split(" ") + _[1:]
        rslt.append(_)

    return {
        "QUADS": rslt
    }
