import { Slug } from './slug'

it('Should me able to create a new slug from text', () => {
  const slug = Slug.createFromText('An example title')

  expect(slug.value).toEqual('an-example-title')
})
