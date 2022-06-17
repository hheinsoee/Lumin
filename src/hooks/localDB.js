import React, { useEffect, useState } from 'react';
// const gems = [
//     { name: "Hein", price: 2345 },
// ]

function useLocalDB(props) {
    const [towns, setTowns] = useState(false);
    const db = window.openDatabase('Lumin', '1.0', 'Lumin', 1 * 1024 * 1024);

    useEffect(() => {
        db.transaction(function (t) {
            t.executeSql(
                'SELECT * FROM towns',
                [],
                function (tx, results) {
                    setTowns(Object.keys(results.rows).map((key) => results.rows[key]));
                },
                null
            );
        });
    }, [props])

    function createTable() {
        db.transaction(t => {
            t.executeSql(
                'CREATE TABLE towns (created_at TIMESTAMP , id INTEGER, name TEXT, updated_at TIMESTAMP)'
            );
        }, e => console.error(e));
    }
    function insertTown(data) {
        db.transaction(t => {
            if (Array.isArray(data)) {
                for (let a of data) {
                    t.executeSql(
                        'INSERT INTO towns (created_at , id , name , updated_at ) VALUES (?, ?, ?, ?)',
                        [a.created_at, a.id, a.name, a.updated_at]
                    );
                }
            }
            else {
                t.executeSql(
                    'INSERT INTO towns (created_at , id , name , updated_at ) VALUES (?, ?, ?, ?)',
                    [data.created_at, data.id, data.name, data.updated_at]
                );
            }

        }, e => console.error(e));
    }
    function dropTable() {
        db.transaction(function (t) {
            t.executeSql("DROP TABLE towns",
                [],
                function (tx, results) { console.log("Successfully Dropped") },
                function (tx, error) { console.log("Could not delete") }
            );
        }, e => console.error(e));
    }
    return {
        towns,
        setTowns,
        createTable,
        insertTown,
        dropTable
    }
}

export default useLocalDB;