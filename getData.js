export const getData=async (url,options,renderFc,)=>{
    const response=await fetch(url,options)
    const data=await response.json()
    renderFc(data)
}