import { Button } from "antd";

function Profile() {
  return (
    <div className="flex justify-between p-4">
      <div>
        <p className="text-white text-4xl font-bold">{"Hello, I'm"}</p>
        <p className="text-white text-4xl font-bold">Ganesh</p>
        <p className="text-white text-sm">
          qwertyuioplkj sfgdhfjgkhlgfds asfgdhfjgkh
        </p>
        <div>
          <Button size="small">Hire Me</Button>
          <Button size="small">Download CV</Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Profile;
