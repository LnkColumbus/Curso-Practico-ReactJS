import gravatar from '../../utils/gravatar';

test('should Gravatar Function Test', () => {
  const email = 'marlonveliz.nero19@gmail.com';
  const gravatarUrl =
    'https://gravatar.com/avatar/100258b6a1a5fff6cbb60ebb8a268ed9';
  expect(gravatarUrl).toEqual(gravatar(email));
});
