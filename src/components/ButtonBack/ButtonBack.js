import { Button, LinkBack } from './ButtonBack,styled';

const ButtonBack = ({ to }) => {
  return (
    <LinkBack to={to}>
      <Button> Come Back</Button>
    </LinkBack>
  );
};

export default ButtonBack;
