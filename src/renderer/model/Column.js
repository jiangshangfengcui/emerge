import uuid from 'uuid'
export default class Column {
	constructor({
		columnName = '',
		columnKey = '',
		remark = '',
		isNull = '',
		type = ''
	}) {
		this.columnId = uuid.v1()
		this.name = columnName
		this.lowCaseName = this.name.replace(/\_(\w)/g, function(all, letter){
			return letter.toUpperCase();
		})
		this.lowCaseName = this.lowCaseName.charAt(0).toLowerCase() + this.lowCaseName.slice(1)
		this.remark = remark
		this.isNull = isNull === 'YES'
		this.isPrimary = columnKey === 'PRI'
		this.type = conventType(type)
	}
}

 function conventType (type) {
	type = type.toUpperCase()
	if (type.indexOf('CHAR') >= 0 || type.indexOf('VARCHAR') >= 0 || type.indexOf('BINARY') >= 0 || type.indexOf('VARBINARY') >= 0 || type.indexOf('BLOB') >= 0 || type.indexOf('TEXT') >= 0) {
		return 'String'
	}
	if (type.indexOf('TINYINT') >= 0 || type.indexOf('SMALLINT') >= 0 || type.indexOf('MEDIUMINT') >= 0 || type.indexOf('INT') >= 0 || type.indexOf('BIGINT') >= 0 || type.indexOf('DECIMAL') >= 0 || type.indexOf('BIT') >= 0) {
		return 'Number'
	}
	if (type.indexOf('DATE') >= 0 || type.indexOf('DATETIME') >= 0 || type.indexOf('TIMESTAMP') >= 0 || type.indexOf('YEAR') >= 0) {
		return 'Date'
	}
}
