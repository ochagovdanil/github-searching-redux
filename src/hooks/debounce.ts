import { useEffect, useState } from 'react';

export function useDebounce(value: string, delay = 300): string {
	const [debounced, setDebounced] = useState<string>(value);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebounced(value);
		}, delay);

		return () => clearTimeout(timeoutId);
	}, [value, delay]);

	return debounced;
}
