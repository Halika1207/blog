//TODO: Replace with lib classNames

type Mod = Record<string, string | boolean>;

export const classNames = (cls: string, mods: Mod = {}, additionalClasses: string[] = []): string => {
	return [
		cls,
		...additionalClasses.filter(Boolean),
		...Object.entries(mods) //[[hovered, true], ]
			.filter(([_, value]) => Boolean(value)) //[['hovered', true]]
			.map(([cls, _]) => cls)
	].join(' ');
}
