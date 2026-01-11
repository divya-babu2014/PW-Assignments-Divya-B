import test, { expect } from '@playwright/test'
let uName="admin"
let pass="F/*jyM6Q6pHh"
let login= `${uName}:${pass}`
let info=btoa(login)
 
let sys_ID:any
test.describe.serial ('running api test serially ',async() =>{
test("Post Request in SN",async({request})=>{
 
    //uri
let postResponse= await request.post('https://dev181504.service-now.com/api/now/table/change_request',{
    //headers
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${info}`
    },
    //req body
    data:{
    "short_description": "Learn The Postman Basic in Playwright"
}
   
})
 
//res body
let res=await postResponse.json()
console.log(res)
sys_ID=res.result.sys_id
//console.log(sys_ID)
//val
expect(postResponse.status()).toBe(201)
})
 
 
test("Get Rquest",async({request})=>{
 
   let getReponse=await request.get(`https://dev181504.service-now.com/api/now/table/change_request/${sys_ID}`,{
 
        headers:{
       "Content-Type":"application/json",
       "Authorization":`Basic ${info}`
    },
   })
    let res1=await getReponse.json()
    console.log(res1)
   
})
test("patch Rquest",async({request})=> {
 
   let patchReponse=await request.patch(`https://dev181504.service-now.com/api/now/table/change_request/${sys_ID}`,{
 
       headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${info}`
    },
    //req body
    data:{
    "short_description": " upddate to learn The Postman Basic in Playwright"
}
 
})
 
//res body
let res=await patchReponse.json()
console.log(res)
 
 
 
})
 
test("Get after patch Rquest",async({request})=>{
 
   let getReponse=await request.get(`https://dev181504.service-now.com/api/now/table/change_request/${sys_ID}`,{
 
        headers:{
       "Content-Type":"application/json",
       "Authorization":`Basic ${info}`
    },
   })
    let res1=await getReponse.json()
    console.log(res1)
   
})
 
test("Delete Request in SN",async({request})=>{
 
    //uri
   let Delreq=await request.delete(`https://dev181504.service-now.com/api/now/table/change_request/${sys_ID}`,{
    //headers
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${info}`
    },
   
    })
 
  expect(Delreq.status()).toBe(204)
  })
 
 
})
 