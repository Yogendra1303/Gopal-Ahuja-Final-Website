with open('src/components/Header.tsx', 'r') as f:
    header = f.read()

import re
header = re.sub(
    r'  useEffect\(\(\) => \{\n    const handleOpenAdvisory = \(\) => setIsAdvisoryOpen\(true\);\n    window\.addEventListener\(\'openAdvisory\', handleOpenAdvisory\);\n    return \(\) => window\.removeEventListener\(\'openAdvisory\', handleOpenAdvisory\);\n  \}, \[\]\);\n\n',
    '',
    header
)

with open('src/components/Header.tsx', 'w') as f:
    f.write(header)
print("Reverted Header")
