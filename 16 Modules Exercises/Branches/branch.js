let Employee = require('./employee');
let _id;
let _branchName;
let _companyName;
let _employees;

class Branch {
    constructor(id, branchName, companyName) {
        _id = id;
        _branchName = branchName;
        _companyName = companyName;
        _employees = [];
    }

    get id() {
        return _id;
    }
    get branchName() {
        return _branchName;
    }
    get companyName() {
        return _companyName;
    }
    get employees() {
        return _employees;
    }

    set id(newId) {
        _id = newId;
    }
    set branchName(newBranchName) {
        _branchName = newBranchName;
    }
    set companyName(newCompanyName) {
        _companyName = newCompanyName;
    }

    hire(employee) {
        _employees.push(employee);
    }
    toString() {
        let result =`@ ${_companyName }, ${ _branchName }, ${ _id }`;
        result += `\nEmployed:`;
        if(_employees.length) {
            _employees.forEach(emp => result += `\n** ${ emp.toString() }`);
        } else {
            result += `\nNone...`;
        }
        return result;
    }
}

module.exports = Branch;