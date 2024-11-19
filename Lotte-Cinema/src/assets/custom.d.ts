declare module '*.svg?react' {
	import React from 'react';
	export const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}
