class CreateIssues < ActiveRecord::Migration[6.0]
  def change
    create_table :issues do |t|
      t.integer :project_id
      t.string :description
      t.boolean :working
      t.boolean :done
      t.string :kind

      t.timestamps
    end
  end
end
