class IssueSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :description, :kind, :done, :working
end
