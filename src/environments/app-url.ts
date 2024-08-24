 const Base_URl = 'https://services-app.tasweka.com/api';
 

export class getGeneric{
  public static get(route:string){
    return `${Base_URl}/${route}`
  }
}
export class postGeneric{
  public static post(route:string){
    return `${Base_URl}/${route}`
  }

}
export class deletGeneric{
  public static delete(route:string){
    return `${Base_URl}/${route}`
  }
}
