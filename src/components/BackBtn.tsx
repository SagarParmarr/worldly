import type { MouseEvent } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function BackBtn() {
  const navigate = useNavigate();

  const handleBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Button
      type="back"
      onClick={handleBack}
    >
      &larr; Back
    </Button>
  );
}
