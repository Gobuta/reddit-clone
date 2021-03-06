exports.up = function(knex) {
  return knex.schema.createTable('post_votes', table => {
    table
      .integer('post_id')
      .references('id')
      .inTable('posts');
    table
      .integer('user_id')
      .references('id')
      .inTable('users');
    table.index(['user_id', 'post_id']);
    table.boolean('vote').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('post_votes');
};
