# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Project.delete_all
# Issue.delete_all
# Then rake db:seed

project1 = Project.create(name: "List App")

issue1 = Issue.create(project_id: 3, description: "remove ',' from items and lists")
issue2 = Issue.create(project_id: 3, description: "change URL")