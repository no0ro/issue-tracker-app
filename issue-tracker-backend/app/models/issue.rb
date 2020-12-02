class Issue < ApplicationRecord
    belongs_to :project

    # validations 
    # prevent any instance of a bug unless they pass these..
    validates :description, presence: true

    # only need to initialize with a :description
    # then will be default added to "backlog" or something
    # THEN you can click :working or :done, which will update db and move location on screen
end

 