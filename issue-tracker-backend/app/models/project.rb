class Project < ApplicationRecord
    has_many :issues

    # keep?
    validates :name, presence: true
end
