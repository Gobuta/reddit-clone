exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable();
    table
      .integer('subreddit_id')
      .references('id')
      .inTable('subreddits')
      .notNullable();
    table.string('title', 300).notNullable();
    table.string('text', 40000);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
