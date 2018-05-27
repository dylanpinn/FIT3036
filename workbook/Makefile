build:
	make concat
	make prettier
	pandoc workbook.md -s -o workbook.pdf
concat:
	cat ./weekly-notes/*.md > workbook.md
prettier:
	yarn prettier --write workbook/workbook.md
