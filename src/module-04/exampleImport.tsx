import { UserType } from "./types";

type PropsExample = {
  userExample: UserType;
};

const ExampleImport = ({ userExample }: PropsExample) => {
  return (
    <div>
      <div>{userExample.name}</div>
    </div>
  );
};

export default ExampleImport;
