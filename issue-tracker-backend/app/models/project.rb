class Project < ApplicationRecord
    has_many :issues
    # NEED?  has_many :issues, dependent: :destroy

    # keep?
    validates :name, presence: true
end
 