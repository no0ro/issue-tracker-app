# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Project.delete_all
# Bug.delete_all
project = Project.create(name: "Kombucha Thougthts")

bug1 = Bug.create(project_id: 1, description: "delete action move inside class")
bug2 = Bug.create(project_id: 1, description: "binding")