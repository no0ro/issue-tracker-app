class Api::V1::IssuesController < ApplicationController
    # namespaced bc of added constroller folders and routes  

    #before_action :set_project

    def index 
        @issues = Issue.all 
        render json: @issues  # saying render these issues as JSON
        # whatever we have here aka `@issues` is what will be ther responce in our fetch requests 
            # aka this is what is sent back into our frontend after a fetch request is run 
    end 

    def show 
        @issue = Issue.find(params[:id])
        render json: @issue
    end 

    def create
        # how to create instance of this issue class
        @issue = Issue.new(issue_params)
        if @issue.save 
            render json: @issue
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
        @issue.update() #(name: params["issue"]["description"])
        @issue.save
        render json: @issue
    end 

    def destroy 
        @issue = Issue.find(params[:id])
        @issue.destroy
    end 

    # specify the params an issue can be created with 
    private
    # def set_project
    #     @project = Project.find(params[:project_id])
    # end

    def issue_params
        params.require(:issue).permit(:description, :project_id, :working, :done)
    end 


end
