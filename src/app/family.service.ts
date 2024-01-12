import { Injectable } from '@angular/core';
import { createConnection } from 'mysql2';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private connection: Connection;
  constructor() { 
    this.connection= createConnection({
      host:"",
      user:"",
      password:"",
      database:""
    })
    this.connection.connect((err:any)=>{
      if(err){
        console.error("Can't connect to the database: ",err);
        return;
      }
      console.log("Connected succesfully.")
    })
  }
  getFamilyMembers(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM FamilyMembers';
      this.connection.query(query, (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  closeConnection(): void {
    this.connection.end((err) => {
      if (err) {
        console.error('Error closing database connection:', err);
      } else {
        console.log('Database connection closed');
      }
    });
  }
}
