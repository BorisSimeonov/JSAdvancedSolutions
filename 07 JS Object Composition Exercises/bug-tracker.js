function solution() {

    let module = (function () {
        let nextId = 0;
        let reports = [];
        let module_selector = undefined;
        return {
            report: function (author, description, reproducible, severity) {
                let report = {
                    ID: nextId,
                    author: author,
                    description: description,
                    reproducible: reproducible,
                    severity: severity,
                    status: "Open"
                };
                nextId++;
                reports.push(report);
                this.update();
            },
            output: function (selector) {
                module_selector = $(selector);
            },
            update: function () {
                module_selector.empty();
                for (let report of reports) {
                    let reportDiv = ($('<div>'))
                        .attr('id', `report_${report.ID}`)
                        .addClass('report');
                    let body = ($('<div>'))
                        .addClass('body')
                        .append(($('<p>'))
                            .text(report.description));
                    let title = ($('<div>'))
                        .addClass('title')
                        .append(($('<span>'))
                            .addClass('author')
                            .text(`Submitted by: ${report.author}`))
                        .append(($('<span>'))
                            .addClass('status')
                            .text(`${report.status} | ${report.severity}`));

                    reportDiv.append(body);
                    reportDiv.append(title);
                    module_selector.append(reportDiv);
                }
            },
            remove: function (id) {
                for (let index in reports) {
                    if (reports[index].ID === id) {
                        reports.splice(index, 1);
                        this.update();
                        break;
                    }
                }
            },
            setStatus: function (id, newStatus) {
                for (let index in reports) {
                    if (reports[index].ID === id) {
                        reports[index].status = newStatus;
                        this.update();
                        break;
                    }
                }
            },
            sort: function (method = "ID") {
                reports = reports.sort(function (a, b) {
                    if (a[method] > b[method]) return 1;
                    if (a[method] < b[method]) return -1;
                    return 0;
                });
                this.update();
            }
        }
    })();
    return module;
}
