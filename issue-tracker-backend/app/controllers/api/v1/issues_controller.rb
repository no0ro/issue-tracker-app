class Api::V1::IssuesController < ApplicationController
    # namespaced bc of added constroller folders and routes  

    before_action :set_project
    # every time we access a issue, its going to be attached to a project, easier if we just set the project first and then it will apply to every action here
    # before we run any action, run this. 



    # /api/v1/projects/1/issues   
    # ^ list of all issues all issues associated with project 1
    # use project_id to  use project id to `find(params[:project_id])` and set it in our set_projects private before action
        # this is reason we're using instance variable
    def index 
        # dont want all issues associated everywhere, just want the one associated with a specific project
            # first figure out the project, and then get that projects issues
        # since our issues are associated with a project, we can use that project to access those specific issues associated with that project
        
        @issues = @project.issues 
        render json: @issues  # saying render these issues as JSON
        # whatever we have here aka `@issues` is what will be ther responce in our fetch requests 
            # aka this is what is sent back into our frontend after a fetch request is run 
    # -------OR------------
        # @issues = Issue.all
        # render json: @issues
        # issues = Issue.order("created_at DESC")
    end 

    def show 
        @issue = Issue.find(params[:id])
        # OTHER WAY TO DO IT - @issue = @project.issues.find_by(id: params[:id]) 
        render json: @issue
    end 

    def create
        # how to create instance of this issue class
        @issue = @project.issues.new(issue_params)   # associate the issue!
            # @issue = @project.issues.build(issue_params) -- tested in console, build works the same
        
        if @issue.save 
            # render json: @issue
            render json: @project
        else 
            render json: {error: 'Issue creating an issue :)'}
        end 
    end 

    # def edit 
    #     # need this? its just toggle.
    #     # where get is passed through
    # end 

    def update 
        # this where post is passed through to return update

        @issue = Issue.find(params[:id])
        @issue.update(issue_params) #(name: params["issue"]["description"])
        @issue.save
        render json: @issue

        # ----OR----
        # issue.update_attributes(issues_param)
    end 

    def destroy 
        @issue = Issue.find(params[:id])
        # @project = Project.find(@issue.project_id) # do i need this?
        @issue.destroy 
        # @issue.destroy

        #  --need?-- head :no_content, status: :ok 
    end 



    # specify the params an issue can be created with 
    private

    def set_project
        @project = Project.find(params[:project_id])
        # :project_id is coming from Fetch Request  ---  # /api/v1/projects/1/issues   
        # /api/v1/projects/:project_id/issues   
    end
   
  
    def issue_params
        params.require(:issue).permit(:description, :project_id, :kind, :done, :working)
    end 

end
