"use strict";
function tickets(inputInfo, sortType) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketArray = [];

    (() => {
        inputInfo.forEach((ticketLine) => {
            ticketLine = ticketLine.split(/\|/g);
            ticketArray.push(new Ticket(
                ticketLine[0],
                Number(ticketLine[1]),
                ticketLine[2])
            );
        })
    })();

    ticketArray.sort((a,b) => {
        if(a[sortType] > b[sortType]) return 1;
        if(a[sortType] < b[sortType]) return -1;
        return 0;
    });

    return ticketArray;
}

//for testing purposes
tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'destination');