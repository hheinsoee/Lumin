import React from 'react';

function useLocalDB(props) {
    const gems = [
        { name: "Hein", price: 2345 },
        { name: "Soe", price: 2200 },
        { name: "Zin", price: 101000 },
    ]
    const db = window.openDatabase('data', '1.0', 'data', 1 * 1024 * 1024);
    db.transaction(t => {

        t.executeSql('CREATE TABLE gems (name TEXT, price INTEGER)');


        for (let g of gems) {
            t.executeSql('INSERT INTO gems (name, price) VALUES (?, ?)',
                [g.name, g.price]);
        }

    }, e => console.error(e));


    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM gems', [], function (tx, results) {
            //    var len = results.rows.length, i; 
            //    msg = "<p>Found rows: " + len + "</p>"; 
            //    document.querySelector('#status').innerHTML +=  msg; 

            //    for (i = 0; i < len; i++) { 
            //       alert(results.rows.item(i).log ); 
            //    } 
            console.log(results);

        }, null);
    });

    return (
        <div>

        </div>
    );
}

export default useLocalDB;