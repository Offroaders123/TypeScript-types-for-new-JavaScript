
// Relinquishing Permissions
// Specification: https://wicg.github.io/permissions-revoke/
// Repository: https://github.com/WICG/permissions-revoke

interface Permissions {
	revoke(permissionDesc: NewJavaScript.PermissionDescriptor): Promise<PermissionStatus>;
}
