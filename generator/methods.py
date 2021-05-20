import csv


def parse_methods(csv_file):
    """
    Parses the input CSV file with columns (method, usability, errors)
    and yields `MethodInfo` instances as a result.
    """
    with csv_file.open(newline='') as f:
        f = csv.reader(f)
        next(f, None)  # header
        for line, (method, usability, errors) in enumerate(f, start=2):
            yield method, usability, errors
