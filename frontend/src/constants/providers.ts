export interface Provider {
  name: string;
  icon: string;
}

export const providers: Provider[] = [
  { name: 'Supabase', icon:  'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-supabase.svg' }, 
  { name: 'Auth0', icon: 'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-auth0.svg' },
  { name: 'Amplify', icon: 'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-amplify.svg' },
  { name: 'Firebase', icon: 'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-firebase.svg' },
  { name: 'JWT', icon:  'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-jwt.svg'},
];