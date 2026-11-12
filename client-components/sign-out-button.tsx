'use client';
import { signOut } from '@/lib/auth/auth-client';
import { useRouter } from 'next/navigation';
import { DropdownMenuItem } from '../components/ui/dropdown-menu';
type Props = {};

const SignOutButton = (props: Props) => {
  const router = useRouter();
  const logOut = async () => {
    const result = await signOut();
    console.log('sign out client result', result);
    if (result.data?.success) {
      router.push('/sign-in');
      router.refresh(); // for the the whole NabBar which is a server component to re-render
    } else {
      alert('Errort signing out');
    }
  };

  return <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>;
};

export default SignOutButton;
