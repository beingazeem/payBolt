import { Link } from 'react-router-dom';
import { RoutePath } from '@/routes';
import { Button } from '@shared/ui/button';

export const NotFound = () => {
  return (
    <div className="mt-32 text-center mb-20 flex flex-col items-center justify-center gap-2">
      <h3 className="text-6xl font-bold">404</h3>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <Link to={RoutePath.HOME} replace className="mt-8">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
};
