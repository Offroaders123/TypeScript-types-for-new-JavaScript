
// Requesting Permissions
// Specification: https://wicg.github.io/permissions-request/
// Repository: https://github.com/WICG/permissions-request

interface Permissions {
	request(permissionDesc: NewJavaScript.PermissionDescriptor): Promise<PermissionStatus>;

	// non-standard requestAll() function (https://crbug.com/516626):
	requestAll(permissionsDesc: NewJavaScript.PermissionDescriptor[]): Promise<PermissionStatus>;
}
