class Issue < ApplicationRecord
    belongs_to :project

    # validations 
    # prevent any instance of a bug unless they pass these..
    validates :description, presence: true
end
 