import connectDB from "@/lib/connectDB"
import usermodel from "@/model/user";

const create = async(formdata:any) => {
    'use server'
    await connectDB();
    const userinfo = {
        name:formdata.get('fullname'),
        email:formdata.get('email'),
        password:formdata.get('password'),
    }
    const result = await usermodel.create(userinfo);
    console.log("Result: mil gya",result);
}

const PostData = () => {
  return (
   <form action={create}>
    <div className="flex items-center">
        <span>Title:</span>
        <input type="text" name="fullname" />
    </div>
    <div className="flex items-center">
        <span>Email:</span>
        <input type="email" name="email" />
    </div>
    <div className="flex items-center">
        <span>Password:</span>
        <input type="password" name="password" />
    </div>
    <button type="submit">Submit</button>
   </form>
  )
}

export default PostData
