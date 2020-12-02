class Api::V1::ProjectsController < ApplicationController
      # namespaced bc of added constroller folders and routes 

    def index 
        @projects = Project.all 
        render json: @projects
    end 

    def create
        @project = Project.new(project_params)
        if @project.save 
            render json: @project
        else 
            render json: {error: 'Error creating project'}
        end 
    end 

    def show 
        @project = Project.find(params[:id])
        render json: @project
    end 

    def destroy 
        @project = Project.find(params[:id])
        @project.destroy
    end 

    # specify the params an issue can be created with 
    private
    def project_params
        params.require(:project).permit(:name)
    end 
end
