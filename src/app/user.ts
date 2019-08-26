export class User {
    constructor(
            public username:string,
            public avatar: string,
            public html_url: string,
            public name: string,
            public followers:number,
            public following: number,
            public url: string,
            public date:Date,
        ){}
    }
  