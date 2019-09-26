// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import projectCategory from './projectCategory'
import project from './project'
import page from './page'
import illustration from './illustration'
import post from './post';

import blockSimple from './blockSimple';
import blockMedia from './blockMedia'
import video from './video';
import richImage from './richImage';
import slideshow from './slideshow';



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    illustration,
    project,
    post,
    page,
    projectCategory,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockMedia,
    blockSimple,
    richImage,
    video,
    slideshow
  ])
})
