import Button from '@mui/material/Button';

export default function CustomButton({
	label,
	className,
}: {
	label: string;
	className?: string;
}) {
	return <Button className={className}>{label}</Button>;
}
