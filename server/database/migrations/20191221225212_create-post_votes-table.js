exports.up = function(knex) {
  return knex.schema.createTable('post_votes', table => {
    table.increments();
    table
      .integer('post_id')
      .references('id')
      .inTable('posts');
    table
      .integer('user_id')
      .references('id')
      .inTable('users');
    table.boolean('vote').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('post_votes');
};
