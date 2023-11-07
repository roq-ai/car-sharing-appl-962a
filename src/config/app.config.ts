interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Service Representative', 'Car Owner'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own bookings.',
    'Create and manage own feedback.',
    'Create service requests.',
    'Read own user information.',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage cars',
    'Manage bookings',
    'Manage feedbacks',
    'Manage service requests',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7a72ccc8-4fc4-4d08-ac11-b0f052099f03',
};
